// Data de início do relacionamento
// Atenção: mês é 0-based (0 = janeiro, 2 = março)
const startDate = new Date(2004, 2, 25, 0, 0, 0); // 25/03/2004

// Mostra a data inicial bonitinha na tela
document.getElementById('start-date').textContent =
  startDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

function updateCounter() {
  const now = new Date();

  // Diferença total em ms (para horas/minutos/segundos)
  const diffMs = now - startDate;

  // -----------------------------
  // Cálculo correto de anos / meses / dias (por calendário)
  // -----------------------------
  const nowY = now.getFullYear();
  const nowM = now.getMonth() + 1; // 1-12
  const nowD = now.getDate();

  const startY = startDate.getFullYear();
  const startM = startDate.getMonth() + 1; // 1-12
  const startD = startDate.getDate();

  // Total de meses entre as duas datas
  let totalMonths = (nowY - startY) * 12 + (nowM - startM);

  // Se ainda não chegou no "dia" do mês, tira 1 mês
  if (nowD < startD) {
    totalMonths -= 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Cálculo dos dias restantes
  let days;
  if (nowD >= startD) {
    days = nowD - startD;
  } else {
    // Pega o último dia do mês anterior ao atual
    const prevMonthDate = new Date(nowY, nowM - 1, 0); // dia 0 = último dia do mês anterior
    const daysInPrevMonth = prevMonthDate.getDate();
    days = nowD + (daysInPrevMonth - startD);
  }

  // -----------------------------
  // Horas / minutos / segundos (resto em relação aos dias completos)
  // -----------------------------
  const totalSeconds = Math.floor(diffMs / 1000);
  const seconds = totalSeconds % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;

  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;

  // Exibe na tela
  document.getElementById('counter').textContent =
    `${years} anos, ${months} meses, ${days} dias, ` +
    `${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateCounter, 1000);
updateCounter();
