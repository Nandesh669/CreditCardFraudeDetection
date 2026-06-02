# pyrefly: ignore [missing-import]
from flask import Flask, render_template, request
import numpy as np
import joblib

# Create Flask App
app = Flask(__name__)

# Load trained Machine Learning model
model = joblib.load("fraud_model.pkl")


# Home Page
@app.route('/')
def home():
    return render_template("index.html")


# Dashboard Page
@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")


# Prediction Route
@app.route('/predict', methods=['POST'])
def predict():

    # Get values from HTML form
    amount = float(request.form['amount'])
    time = float(request.form['time'])
    location = int(request.form['location'])
    device = int(request.form['device'])
    transaction_type = int(request.form['transaction_type'])
    account_age = int(request.form['account_age'])

    # Convert data into ML input format
    features = np.array([[
        amount,
        time,
        location,
        device,
        transaction_type,
        account_age
    ]])

    # Predict using ML model
    prediction = model.predict(features)

    # Result message
    if prediction[0] == 1:
        result = "⚠ Fraudulent Transaction Detected!"
    else:
        result = "✅ Legitimate Transaction"

    # Send result back to webpage
    return render_template(
        "index.html",
        prediction_text=result
    )


@app.route('/analytics')
def analytics():
    return render_template("analytics.html")


@app.route('/transactions')
def transactions():
    return render_template("transactions.html")


@app.route('/security')
def security():
    return render_template("security.html")


@app.route('/settings')
def settings():
    return render_template("settings.html")


# Run Flask Server
if __name__ == "__main__":
    app.run(debug=True)