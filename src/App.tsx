import './App.css'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import {ProfileForm} from "./ProfileForm"
export  function Home() {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <Button>Click me</Button>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<ProfileForm></ProfileForm>
    </div>
  )
}


function App() {

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Home></Home>
     </ThemeProvider>
    
    </>
  )
}

export default App
