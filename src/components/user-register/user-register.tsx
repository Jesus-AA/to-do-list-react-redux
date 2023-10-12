export function Register() {
  return (
    <div>
      <form role="form">
        <h2>Register</h2>
        <div className="firstName">
          <div>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div>
            <input type="text" name="firstName" id="firstName" required />
          </div>
        </div>
        <div className="lastName">
          <div>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div>
            <input type="text" name="lastName" id="lastName" required />
          </div>
        </div>
        <div className="email">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              id="email"
              required
            />
          </div>
        </div>
        <div className="password">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="password" name="password" id="password" required />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
