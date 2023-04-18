import Image from 'next/image'
import picture from './focus.jpg'
import {FC} from "react";

export interface HeroProps {
    onClickHandler: () => void
}

export const Hero: FC<HeroProps> = ({onClickHandler}: HeroProps) => (
    <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={picture}
                       alt="any Text"/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Tabsly - Ein neuer Tab für Devs, der deinen Arbeitsalltag auf ein neues Level bringt
                    </h1>
                    <p className="mb-8 leading-relaxed">Tabsly hilft dir, deinen Arbeitsalltag als
                        Softwareentwickler zu administrieren, den Fokus zu behalten und genügend Pausen zu
                        machen. </p>
                    <div className="flex justify-center">
                        <button onClick={onClickHandler}
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
)