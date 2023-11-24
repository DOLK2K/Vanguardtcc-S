import React, { useState } from 'react';



const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const processPayment = () => {
    // Aqui você adicionaria lógica para processar o pagamento usando uma chamada de API.
    // Por razões de segurança, essa lógica geralmente seria feita no lado do servidor.
    alert("Pagamento processado com sucesso!");
  };

  return (
    <div>
      <h1>Página de Pagamento</h1>
      <form>
        <label>Número do Cartão</label>
        <input type="text" value={cardNumber} onChange={handleCardNumberChange} placeholder="1234 5678 9012 3456" required />

        <label>Data de Validade</label>
        <input type="text" value={expiryDate} onChange={handleExpiryDateChange} placeholder="MM/AA" required />

        <label>CVV</label>
        <input type="text" value={cvv} onChange={handleCvvChange} placeholder="123" required />

        <button type="button" onClick={processPayment}>Pagar</button>
      </form>
    </div>
  );
};

export default PaymentPage;
