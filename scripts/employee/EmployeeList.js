import { useEmployee } from "./employeeDataProvider.js";
import { employeeHtmlRep } from "./Employee.js";

const domTarget = document.querySelector(".employeeList")
const employeeArray = useEmployee()

export const employeeList = () => {
    for (const employeeItem of employeeArray) {
        
        domTarget.innerHTML += employeeHtmlRep(employeeItem)

        
    }
}