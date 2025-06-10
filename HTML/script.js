// Data de início do relacionamento
const startDate = new Date('2004-03-25T00:00:00'); // Edite aqui
document.getElementById('start-date').textContent =
  startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  // Cálculo de tempo decorrido
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth() + (years * 12);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Exibe tempo juntos em formato bonito
  document.getElementById('counter').textContent =
    `${years} anos, ${months % 12} meses, ${days % 30} dias, ` +
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateCounter, 1000);
updateCounter();

  