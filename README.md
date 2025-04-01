# Challenge Tech2C

🚀 **A solution for processing and visualizing energy consumption and CO2 emissions data provided in an Excel file. Built as part of the Tech2C Junior FS Challenge 2025.**

---

## 🛠️ Project Overview

This project processes an Excel file exported by DGEG to extract valuable insights regarding:
- **Annual Total CO2 Emissions**
- **Average Energy Consumption per Company**
- **Top 5 Companies with the Highest CO2 Emissions**

It provides a clean and user-friendly web interface to display these indicators. The application is dockerized for ease of setup and deployment.

---

## 📦 Prerequisites

To run the project, you’ll need one of the following setups:

### Without Docker:
- Python 3.8+
- `pip` for dependency management.

### With Docker:
- Docker installed and running on your machine.

---

## ⚙️ Installation and Usage

### Running Locally (Without Docker):

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/mariannacbm34/ChallengeTECH2C.git
   cd ChallengeTech2C
2. **Install Dependencies:**
 ```bash
   pip install -r requirements.txt
```
3. **Run the Application:**
 ```bash
   python app.py
```
4. **Open in Browser:**
   Access the app at http://localhost:5000.

---
# ⚙️ Running with Docker:

1. **Build the Docker Image:**
   ```bash
   docker build -t challenge .
   ```
2. **Run the Container:**
   ```bash
   docker run -p 5000:5000 challenge
   ```
3. **Access the Application:**
   Visit http://localhost:5000 in your web browser.





 
    
