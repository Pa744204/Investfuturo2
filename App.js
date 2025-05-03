
import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("BRL");
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);

  const simulateInvestment = () => {
    let factor = 1;
    if (currency === "USD") factor = 5;
    if (currency === "EUR") factor = 6;
    const rendimento = amount * 0.10 * factor;
    setResult(rendimento);
  };

  const login = () => {
    setUser({ name: "Usuário Teste", balance: 1000, history: [] });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2563eb" }}>InvestFuturo</h1>
        <p style={{ color: "#4b5563" }}>Invista em seu futuro com segurança e inteligência financeira.</p>
      </header>

      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        {!user ? (
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Login</h2>
            <input type="email" placeholder="Email" style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }} />
            <input type="password" placeholder="Senha" style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
            <button onClick={login} style={{ width: "100%", padding: "0.75rem", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "0.375rem" }}>Entrar</button>
          </div>
        ) : (
          <>
            <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Simule seu investimento</h2>
              <input
                type="number"
                placeholder="Digite o valor a investir"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
              />
              <select onChange={(e) => setCurrency(e.target.value)} value={currency} style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}>
                <option value="BRL">Real (R$)</option>
                <option value="USD">Dólar (US$)</option>
                <option value="EUR">Euro (€)</option>
              </select>
              <button onClick={simulateInvestment} style={{ width: "100%", padding: "0.75rem", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "0.375rem" }}>Simular</button>
              {result !== null && (
                <p style={{ marginTop: "1rem", color: "green", fontWeight: "500" }}>
                  Retorno estimado: R$ {result.toFixed(2)}
                </p>
              )}
            </div>

            <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.5rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Painel do Usuário</h2>
              <p style={{ marginBottom: "0.5rem" }}>Bem-vindo, {user.name}!</p>
              <p style={{ marginBottom: "1rem" }}>Saldo disponível: R$ {user.balance.toFixed(2)}</p>
              <p style={{ color: "#6b7280" }}>Histórico de investimentos: (simulado)</p>
              <ul style={{ paddingLeft: "1rem", fontSize: "0.875rem", color: "#6b7280" }}>

                <li>Investimento de R$ 500, retorno R$ 550</li>
                <li>Investimento de R$ 200, retorno R$ 220</li>
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
