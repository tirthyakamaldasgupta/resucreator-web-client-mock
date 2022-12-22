export default function RegistrationForm() {
    function submitRegistrationForm(event: React.FormEvent<HTMLFormElement>) {
        const formElement = event.target as HTMLFormElement

        event.preventDefault()

        const firstName = (formElement.elements as any).firstNameInput.value
        const middleName = (formElement.elements as any).middleNameInput.value
        const lastName = (formElement.elements as any).lastNameInput.value
        const email = (formElement.elements as any).emailInput.value
        const password = (formElement.elements as any).passwordInput.value
    }

    return (
        <form onSubmit={submitRegistrationForm}>
            <div className="mb-3">
                <label htmlFor="firstNameInput" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstNameInput" required />
            </div>
            <div className="mb-3">
                <label htmlFor="middleNameInput" className="form-label">Middle name</label>
                <input type="text" className="form-control" id="middleNameInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastNameInput" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastNameInput" required />
            </div>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" required />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}