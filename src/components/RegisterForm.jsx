const RegisterForm = () => {
    
  return (
    <div style={{ width: '300px'}}>
        <form method="post">
            <div className="mb-3">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" aria-describedby="firstName" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label for="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" />
            </div>
            <div className="mb-3">
                <label for="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
  )
}
export default RegisterForm