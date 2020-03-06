export const employeeHtmlRep = employee => {
  return `
        <article class="employeeList__container"> 
        <h3>Name: ${employee.firstName} ${employee.lastName}</h3>
        <h4>Job Title: ${employee.jobTitle}</h4>
        <p>Scheduled Hours:${employee.hoursScheduled}</p>
        </article>
    `;
};
