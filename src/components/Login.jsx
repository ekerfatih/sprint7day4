import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

function Login({onSubmit,onChange,buttonActive,errors,valids}) {
    return (
        <div className="content">
            <div className="wrapper">
                <h1 className="dynapuff">Login</h1>
                <div className="credentials">
                    <Form onSubmit={onSubmit}>
                        <FormGroup floating>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={onChange}
                                data-cy="email-input"
                                invalid={!errors.email && valids.email !== ''}
                            />
                            <Label for="email">
                                Email
                            </Label>
                            {!errors.email && valids.email !== '' && <FormFeedback>
                                Email is not valid. @ is required.
                            </FormFeedback>}
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                data-cy="password-input"
                                onChange={onChange}
                                invalid={!errors.password && valids.password !== ''}
                            />
                            <Label for="password">
                                Password
                            </Label>
                            {!errors.password && valids.password !== '' && <FormFeedback>
                                Your password must be at least 8 characters long, contain a number, and contain a
                                special
                            </FormFeedback>}
                        </FormGroup>
                        <FormGroup className="terms" check>
                            <div id="termsDiv">
                                <Input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    onChange={onChange}
                                    data-cy="terms-input"
                                    invalid={errors.terms === false}
                                />
                                <Label
                                    check
                                    for="exampleCheck"
                                >
                                    Şartları kabul ediyorum.
                                </Label>
                            </div>
                            <a href="">Şifremi unuttum?</a>
                        </FormGroup>

                        <Button type={"submit"} className="submit" disabled={!buttonActive}>
                            Sign In
                        </Button>
                    </Form>
                    <div className="new">
                        <span>
                            Don't you have an account? <a href="#">Sign Up!</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;