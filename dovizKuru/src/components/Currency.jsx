import '../css/currency.css'
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_7k9UUC6NBiWtS1jF38i9X0zYD8gNNYWoIfcAA5Su";

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2)
        setResult(result)
    }
    return (
        <>

            <div className="currency-div">
                <div className='title'>
                    <h3>DOVİZ KURU UYGULAMASI </h3>
                </div>

                <div className='boxes' >
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />

                    <select onChange={(e) => setFromCurrency(e.target.value)} className="currency-option">
                        <option >USD</option>
                        <option >EUR</option>
                        <option >TRY</option>
                    </select>
                    <FaLongArrowAltRight className='fa-long-arrow-alt-right' />
                    <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                        <option >TRY</option>
                        <option >USD</option>
                        <option >EUR</option>

                    </select>
                    <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className="result" />

                </div>
                <div>
                    <button onClick={exchange} className='btn'>çevir</button>
                </div>

            </div>


        </>
    )
}

export default Currency

// value özelliği: Kullanıcı bir seçenek seçtiğinde, form gönderildiğinde bu değeri sunucuya gönderir.