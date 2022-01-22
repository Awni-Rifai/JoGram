import './signupForm.css'
const SignupForm=()=>{
    return(
        <section className="signup">
        <div className="signup__container">
            <div className="signup__form">
                <h1>Join us now</h1>
                <small>crate an account with us</small>
                <form action="">
                    <div className="signup__form__group">
                        <label for="name">name</label>
                        <input
                        autofocus
                        autocomplete="on" 
                        type="text" 
                        placeholder="enter your name"
                        required
                        id="name"
                        />
                    </div>
                    <div className="signup__form__group">
                        <label for="email">email</label>
                        <input 
                        type="email" 
                        autocomplete="on"
                        placeholder="enter your email"
                        required
                        id="email"
                        />
                    </div>
                   
                    <div className="signup__form__group">
                        <label for="password">password</label>
                        <input 
                        type="password" 
                        placeholder="enter your password"
                        required
                        id="password"
                        />
                    </div>
                    <div className="signup__form__group">
                        <label for="confirm_password">confirm password</label>
                        <input 
                        type="password" 
                        placeholder="enter your password confirmation"
                        required
                        id="confirm_password"
                        />
                    </div>
                    <div className="signup__form__group">
                        <button className="signup__form__group--btn">sign up</button>
                    </div>

                </form>
            </div>
            <div className="signup__image"></div>
        
        </div>
    </section>
    )
}
export default SignupForm;