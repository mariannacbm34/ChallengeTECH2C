from flask import Flask, jsonify, render_template
import pandas as pd

app = Flask(__name__)

def process_excel():
    df = pd.read_excel("DadosChallenge.xlsx", engine="openpyxl")
    df.columns = df.columns.str.strip()
    total_emissoes_por_ano = df.groupby("Ano")["Emissões de CO2 (toneladas)"].sum().to_dict()
    media_consumo_por_empresa = df.groupby("Empresa")["Consumo de Energia (MWh)"].mean().to_dict()
    top_5_empresas = df.groupby("Empresa")["Emissões de CO2 (toneladas)"].sum().nlargest(5).to_dict()

    return total_emissoes_por_ano, media_consumo_por_empresa, top_5_empresas

@app.route("/")
def index():
    total_emissoes, media_consumo, top_5 = process_excel()
    return render_template("index.html", emissoes=total_emissoes, media_consumo=media_consumo, top_5=top_5)


@app.route("/api/dados")
def get_data():
    total_emissoes, media_consumo, top_5 = process_excel()
    return jsonify({
        "total_emissoes_por_ano": total_emissoes,
        "media_consumo_por_empresa": media_consumo,
        "top_5_empresas_emissoes": top_5
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)


