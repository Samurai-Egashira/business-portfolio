import { HashRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Top from './pages/Top'
import Services from './pages/Services'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactPoc from './pages/ContactPoc'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Googleフォーム動作確認用 */}
        <Route path="/contact-poc" element={<ContactPoc />} />

        {/* ページ未作成時の表示 */}
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </HashRouter>
  )
}

export default App