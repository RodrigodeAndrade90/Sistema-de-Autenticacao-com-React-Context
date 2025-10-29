import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <div className="dashboard-card">
        <h2>🏠 Dashboard</h2>
        
        <div className="welcome-section">
          <h3>🎉 Bem-vindo ao Sistema!</h3>
          <p>Você está autenticado com sucesso</p>
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>📊 Informações do Usuário:</h3>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <p style={{ marginBottom: '10px' }}><strong>ID:</strong> {user?.id}</p>
            <p style={{ marginBottom: '10px' }}><strong>Email:</strong> {user?.email}</p>
            <p><strong>Status:</strong> <span style={{ color: '#28a745' }}>✓ Autenticado</span></p>
          </div>
        </div>

        <button
          onClick={logout}
          className="btn btn-danger"
        >
          🚪 Sair do Sistema
        </button>
      </div>
    </div>
  );
};

export default Dashboard;