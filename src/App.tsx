import { Button } from "./components/ui-kit/button"

export function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>some text dd</p>
      <Button title="some text" handleClick={() => console.log("click")} />
      <Button
        title="some text"
        size="s"
        handleClick={() => console.log("click")}
      />
      <Button
        title="some text"
        size="l"
        handleClick={() => console.log("click")}
      />
    </>
  )
}
