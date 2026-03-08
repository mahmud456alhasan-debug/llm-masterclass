"""
backend.py — LLM Universe Website Backend (Updated)
Adds: /api/grade now sends email via SMTP + stores submissions
Run: python backend.py
"""

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os, re, smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

app = Flask(__name__, static_folder=".")
CORS(app)

# ─── Email config ───────────────────────────────────────────────
# Set these as environment variables OR replace directly (not recommended for production)
SMTP_HOST     = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT     = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER     = os.getenv("SMTP_USER", "your_gmail@gmail.com")   # sender Gmail
SMTP_PASS     = os.getenv("SMTP_PASS", "your_app_password")       # Gmail App Password
PROF_EMAIL    = "omee914@gmail.com"                                # recipient
# ────────────────────────────────────────────────────────────────

# In-memory grade log
grade_log = []

# ─── Search content ──────────────────────────────────────────────
CONTENT = [
    {"id":"what","title":"What is a Large Language Model?","body":"A Large Language Model (LLM) is artificial intelligence trained on massive text data. It learns by predicting the next token in a sequence. LLMs use the Transformer architecture and self-attention mechanisms."},
    {"id":"how","title":"How Transformers Work","body":"The Transformer architecture uses self-attention to relate every token to every other token. Multi-head attention, positional encoding, layer stacking, temperature sampling, and RLHF fine-tuning are key concepts."},
    {"id":"explainer","title":"What is an LLM? For Everyone","body":"An LLM is like a super-reader. It reads billions of pages. Text becomes tokens which become numbers. The model predicts the next word using attention. Token by token it generates language."},
    {"id":"history","title":"History of LLMs","body":"From n-gram models (1990s) to Word2Vec (2013), Transformer paper (2017), BERT and GPT-1 (2018), GPT-3 with 175 billion parameters (2020), ChatGPT (2022), and multimodal models (2023-2025)."},
    {"id":"models","title":"Major LLMs Compared","body":"GPT-4o by OpenAI, Claude 3.5 Sonnet by Anthropic, Gemini 1.5 Pro by Google, Llama 3.1 405B by Meta, Mistral Large, DeepSeek R1, Qwen 2.5 by Alibaba."},
    {"id":"applications","title":"Real-World Applications","body":"Code generation with GitHub Copilot. Healthcare clinical notes and drug discovery. Education personalized tutoring. Legal contract analysis. Creative brainstorming. Translation and localization."},
    {"id":"quiz","title":"LLM Quiz","body":"15 multiple choice questions about LLMs covering architecture, tokenization, attention mechanism, pre-training, fine-tuning, embeddings, temperature, GPT history, and applications."},
    {"id":"ethics","title":"Ethics and Challenges","body":"Hallucinations generate false information. Bias and fairness from training data. Privacy memorization concerns. Environmental cost of training. AI alignment and safety. Misinformation at scale."},
]


# ─── Routes ──────────────────────────────────────────────────────

@app.route("/")
def serve_index():
    return send_from_directory(".", "index.html")


@app.route("/api/search")
def search():
    query = request.args.get("q", "").strip()
    lang  = request.args.get("lang", "en")
    if not query or len(query) < 2:
        return jsonify({"results": [], "count": 0})

    pat = re.compile(re.escape(query), re.IGNORECASE)
    results = []
    for item in CONTENT:
        title = item["title"]
        body  = item["body"]
        if pat.search(title) or pat.search(body):
            m = pat.search(body)
            if m:
                start = max(0, m.start() - 60)
                end   = min(len(body), m.end() + 100)
                snip  = ("..." if start > 0 else "") + body[start:end] + ("..." if end < len(body) else "")
                snip  = pat.sub(lambda x: f"<mark>{x.group()}</mark>", snip)
            else:
                snip = body[:160] + "..."
            results.append({"id": item["id"], "title": title, "snippet": snip})

    return jsonify({"results": results, "count": len(results), "query": query})


@app.route("/api/grade", methods=["POST"])
def submit_grade():
    data    = request.get_json(silent=True) or {}
    grade   = data.get("grade")
    comment = data.get("comment", "")

    if grade is None or not isinstance(grade, (int, float)):
        return jsonify({"error": "Grade must be a number"}), 400
    grade = int(grade)
    if not (0 <= grade <= 100):
        return jsonify({"error": "Grade must be between 0 and 100"}), 400

    feedback = (
        "Excellent work! Outstanding project."  if grade >= 90 else
        "Good work. Solid understanding."       if grade >= 75 else
        "Satisfactory. Some areas need work."   if grade >= 60 else
        "Needs improvement. Please review."
    )

    # Log locally
    entry = {
        "grade":    grade,
        "feedback": feedback,
        "comment":  comment,
        "time":     datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }
    grade_log.append(entry)
    print(f"[GRADE] {grade}/100 — {feedback}")

    # Send email
    email_sent = False
    email_error = ""
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"📊 LLM Universe — Professor Grade: {grade}/100"
        msg["From"]    = SMTP_USER
        msg["To"]      = PROF_EMAIL

        html_body = f"""
        <html><body style="font-family:Arial,sans-serif;background:#f0f4f8;padding:20px">
          <div style="max-width:500px;margin:0 auto;background:#fff;border-radius:12px;padding:30px;border:1px solid #b8cfe8">
            <h2 style="color:#0077aa;margin-bottom:20px">📊 Professor Grade Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:10px;color:#666;width:130px">Project:</td><td style="padding:10px;font-weight:700">LLM Universe Website</td></tr>
              <tr style="background:#f8f8f8"><td style="padding:10px;color:#666">Grade:</td><td style="padding:10px;font-size:1.6rem;font-weight:800;color:#e05a20">{grade} / 100</td></tr>
              <tr><td style="padding:10px;color:#666">Assessment:</td><td style="padding:10px;color:#0077aa;font-weight:700">{feedback}</td></tr>
              <tr style="background:#f8f8f8"><td style="padding:10px;color:#666">Comment:</td><td style="padding:10px">{comment if comment else '—'}</td></tr>
              <tr><td style="padding:10px;color:#666">Submitted:</td><td style="padding:10px;color:#888;font-size:.9rem">{entry['time']}</td></tr>
            </table>
            <p style="margin-top:20px;font-size:.8rem;color:#999">Sent automatically from LLM Universe educational website.</p>
          </div>
        </body></html>
        """
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, PROF_EMAIL, msg.as_string())

        email_sent = True
        print(f"[EMAIL] Grade {grade}/100 sent to {PROF_EMAIL}")

    except Exception as e:
        email_error = str(e)
        print(f"[EMAIL ERROR] {e}")
        print("[EMAIL] Set SMTP_USER and SMTP_PASS environment variables to enable email.")

    return jsonify({
        "grade":       grade,
        "feedback":    feedback,
        "email_sent":  email_sent,
        "email_error": email_error if not email_sent else "",
        "status":      "recorded",
    })


@app.route("/api/grade-log")
def grade_log_view():
    """View all submitted grades (professor access)."""
    return jsonify({"grades": grade_log, "count": len(grade_log)})


@app.route("/api/quiz-submit", methods=["POST"])
def quiz_submit():
    """Accept quiz score submission."""
    data  = request.get_json(silent=True) or {}
    score = data.get("score", 0)
    total = data.get("total", 15)
    pct   = round((score / total) * 100) if total > 0 else 0

    grade = (
        "Outstanding" if score >= 13 else
        "Great"       if score >= 10 else
        "Good"        if score >= 7  else
        "Satisfactory"if score >= 5  else
        "Needs Review"
    )
    print(f"[QUIZ] Score: {score}/{total} ({pct}%) — {grade}")
    return jsonify({"score": score, "total": total, "percent": pct, "grade": grade})


@app.route("/api/stats")
def stats():
    return jsonify({"stats": [
        {"value": "175B+", "label": "Parameters in GPT-4"},
        {"value": "100T+", "label": "Training tokens processed"},
        {"value": "50+",   "label": "Major LLMs 2020–2025"},
        {"value": "95%",   "label": "Human-level benchmark accuracy"},
    ]})


@app.route("/api/models")
def models():
    return jsonify({"models": [
        {"name": "GPT-4o",            "creator": "OpenAI",     "params": "~1.8T",   "type": "Proprietary", "notable": "Multimodal, fast reasoning"},
        {"name": "Claude 3.5 Sonnet", "creator": "Anthropic",  "params": "~70B",    "type": "Proprietary", "notable": "Safety, coding, long context"},
        {"name": "Gemini 1.5 Pro",    "creator": "Google",     "params": "Unknown", "type": "Proprietary", "notable": "1M token context window"},
        {"name": "Llama 3.1 405B",    "creator": "Meta",       "params": "405B",    "type": "Open Source", "notable": "Largest open weights model"},
        {"name": "Mistral Large",     "creator": "Mistral AI", "params": "123B",    "type": "Open Source", "notable": "Efficient, European"},
        {"name": "DeepSeek R1",       "creator": "DeepSeek",   "params": "671B",    "type": "Open Source", "notable": "Chain-of-thought reasoning"},
        {"name": "Qwen 2.5",          "creator": "Alibaba",    "params": "72B",     "type": "Open Source", "notable": "Strong multilingual"},
    ]})


if __name__ == "__main__":
    print("=" * 55)
    print("  LLM Universe Backend — Updated")
    print("  http://localhost:5000")
    print("=" * 55)
    print()
    print("  Endpoints:")
    print("  GET  /                → Frontend")
    print("  GET  /api/search?q=  → Search")
    print("  POST /api/grade      → Submit grade + send email")
    print("  GET  /api/grade-log  → View all grades")
    print("  POST /api/quiz-submit→ Log quiz score")
    print("  GET  /api/stats      → Statistics")
    print("  GET  /api/models     → Models table")
    print()
    print("  Email setup (for grade sending):")
    print("  Set env vars: SMTP_USER and SMTP_PASS")
    print("  Or use Gmail App Password (not your main password)")
    print()
    app.run(debug=True, port=5000)
