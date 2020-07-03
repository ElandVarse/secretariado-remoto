import React from 'react'

import './Services.css'

const Services = () => {
    return (
        <section className="Services">
            <h3>Serviços</h3>

            <div className="Services-Menu">
                <label className="container">One: R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Two - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Three - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                
                <label className="container">Four - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Five - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Six - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Seven - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Eight - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Nine - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Ten - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Eleven - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="container">Twelve - R$ 1.00
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="conclude">
                <p>Total: R$ 12.00</p>
                <button>Concluir orçamento</button>
            </div>

        </section>
    )
}

export default Services;