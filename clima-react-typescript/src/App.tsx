import styles from "./App.module.css"
import Form from "./components/form/Form"
import useWeather from "./hooks/useWeather"
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { Sppiner } from "./components/Sppiner/Sppiner";
import Alert from "./components/Alert/Alert";

function App() {

  const { weather, loading, fetchWeather, hasWeatherData, notFound } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Sppiner />}
        {hasWeatherData &&
          <WeatherDetail weather={weather} />
        }
        {notFound && <Alert>Ciudad No Encontrada</Alert>}

      </div>
    </>
  )
}

export default App
