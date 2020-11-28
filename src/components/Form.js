import React from 'react';

const Form = (props) => {

    const {inputs, setInputs} = props;

    const onChange = (e) =>{
        
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return(
        <form>
            <div className="container">
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="first_name">First Name</label>
                    <input onChange={onChange} className="col-md-6 form-control" type="text" name="first_name" />
                </div>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="last_name">Last Name</label>
                    <input onChange={onChange} className="col-md-6 form-control" type="text" name="last_name" />
                </div>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="email">Email</label>
                    <input onChange={onChange} className="col-md-6 form-control" type="text" name="email" />
                </div>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="password">Password</label>
                    <input onChange={onChange} className="col-md-6 form-control" type="password" name="password" />
                </div>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="confirm_password">Confirm Password</label>
                    <input onChange={onChange} className="col-md-6 form-control" type="password" name="confirm_password" />
                </div>
            </div>
        </form>
    )
}
export default Form;