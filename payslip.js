document.getElementById('paySlipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generatePaySlip();
  })

  function generatePaySlip() {
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const employeePosition = document.getElementById('employeePosition').value;
    const ratePerHour = parseFloat(document.getElementById('ratePerHour').value);
    const numOfHours = parseFloat(document.getElementById('numOfHours').value);
    const overtimeHours = parseFloat(document.getElementById('overtimeHours').value);

    const regSalary = ratePerHour * numOfHours;
    const overtimePay = ratePerHour * 1.5 * overtimeHours;
    const totalEarnings = regSalary + overtimePay;
    const philhealthContribution = totalEarnings * 0.1;
    const sssContribution = totalEarnings * 0.1;
    const pagIbigContribution = totalEarnings * 0.05;
    const netSalary = totalEarnings - (philhealthContribution + sssContribution + pagIbigContribution);

    const currentTime = new Date().toLocaleString();

    const paySlipResults = document.getElementById('paySlipResults');
    paySlipResults.innerHTML = `
      <h3>Pay Slip</h3>
      <table class="breakdown">
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Company</td>
          <td>JVT Company</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>${currentTime}</td>
        </tr>
        <tr>
          <td>Employee ID</td>
          <td>${employeeId}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>${employeeName}</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>${employeePosition}</td>
        </tr>
        <tr>
          <td>Rate per Hour</td>
          <td>${ratePerHour}</td>
        </tr>
        <tr>
          <td>Number of Hours</td>
          <td>${numOfHours}</td>
        </tr>
        <tr>
          <td>Overtime Hours</td>
          <td>${overtimeHours}</td>
        </tr>
        <tr>
          <td>Regular Salary</td>
          <td>${regSalary}</td>
        </tr>
        <tr>
          <td>Overtime Pay</td>
          <td>${overtimePay}</td>
        </tr>
        <tr>
          <td>Total Earnings</td>
          <td>${totalEarnings}</td>
        </tr>
        <tr>
          <td>Philhealth Contribution</td>
          <td>${philhealthContribution}</td>
        </tr>
        <tr>
          <td>SSS Contribution</td>
          <td>${sssContribution}</td>
        </tr>
        <tr>
          <td>Pag-Ibig Contribution</td>
          <td>${pagIbigContribution}</td>
        </tr>
        <tr>
          <td>Net Salary</td>
          <td>${netSalary}</td>
        </tr>
      </table>
    `;
  }
