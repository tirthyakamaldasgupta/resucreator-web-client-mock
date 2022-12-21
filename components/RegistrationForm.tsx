export default function RegistrationForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="firstNameInput" className="form-label">First name</label>
                <input type="email" className="form-control" id="firstNameInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="middleNameInput" className="form-label">Middle name</label>
                <input type="text" className="form-control" id="middleNameInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastNameInput" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastNameInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}