import { FC } from "react"
import {useForm, SubmitHandler} from "react-hook-form";

import TabContent from "../../components/tabContent/TabContent";
import Tab from "../../UI/tab/Tab";

type Inputs = {
    login: string;
    password: string;
}

const ContactContent: FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    console.log(errors)
    return (
        <section className="contact__tabs">
            <TabContent>
                <div className="tab_container">
                    <Tab variant="success" width={"100vw"} title="" subtitle="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("login", {required: "This field is required"})} />
                            <p>{errors.login?.message}</p>
                            <input type="password" {...register("password", {required: "This field is required"})} />
                            <p>{errors.password?.message}</p>
                            <input type="submit" value="send" />
                        </form>
                        <a href="https://accounts.google.com/signin" rel="noreferrer" target="_blank">Войти</a>
                    </Tab>
                </div>
            </TabContent>
        </section>
    )
}

export default ContactContent;