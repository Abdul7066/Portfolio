/**
 * HeroTerminal — the mock terminal block shown in the hero section.
 * Reproduces the exact terminal output from the original HTML.
 */
export default function HeroTerminal() {
  return (
    <div className="hero-terminal fade-in delay-3">
      {/* Window chrome */}
      <div className="term-header">
        <div className="term-dot t1" />
        <div className="term-dot t2" />
        <div className="term-dot t3" />
        <span className="term-title">~/ profile.sh</span>
      </div>

      {/* whoami */}
      <div className="term-line">
        <span className="term-prompt">$</span>
        <span className="term-cmd">whoami</span>
      </div>
      <div className="term-out">
        Backend Developer · <span>3.5 yrs production experience</span>
      </div>

      {/* cat stack.json */}
      <div className="term-line" style={{ marginTop: '8px' }}>
        <span className="term-prompt">$</span>
        <span className="term-cmd">cat stack.json</span>
      </div>
      <div className="term-out">backend: <span>Node.js, NestJS, Express.js</span></div>
      <div className="term-out">databases: <span>MongoDB, PostgreSQL, Redis</span></div>
      <div className="term-out">auth: <span>JWT, OAuth, RBAC</span></div>
      <div className="term-out">frontend: <span>React.js, TypeScript, Tailwind</span></div>
      <div className="term-out">
        ai_integrations: <span className="g">OpenAI, Gemini</span>
      </div>

      {/* echo $LOCATION */}
      <div className="term-line" style={{ marginTop: '8px' }}>
        <span className="term-prompt">$</span>
        <span className="term-cmd">echo $LOCATION</span>
      </div>
      <div className="term-out">
        <span className="y">Degloor Naka Nanded, 431604, Maharashtra</span>
      </div>

      {/* blinking cursor */}
      <div className="term-line" style={{ marginTop: '8px' }}>
        <span className="term-prompt">$</span>
        <span className="term-cursor" />
      </div>
    </div>
  );
}
