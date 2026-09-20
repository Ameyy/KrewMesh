'use client';

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";

type Photo = {
  id: number;
  title: string;
  place: string;
  year: string;
  src: string;
  tone: string;
};

const INITIAL_PHOTOS: Photo[] = [
  {
    id: 1,
    title: "Amey Kulkarni",
    place: "Founder & CEO",
    year: "01",
    src: "/team/amey.jpg",
    tone: "#101010",
  },
  {
    id: 2,
    title: "Dinesh Kulkarni",
    place: "Senior Web Developer",
    year: "02",
    src: "/team/dinesh.jpg",
    tone: "#141414",
  },
];

const GLYPHS = {
  stack: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M8 2h8M8 22h8" />
    </>
  ),
  fan: (
    <>
      <path d="m5 17 3.1-11.6a2 2 0 0 1 2.45-1.41l7.73 2.07a2 2 0 0 1 1.41 2.45l-3.1 11.6a2 2 0 0 1-2.45 1.41L6.42 19.45A2 2 0 0 1 5 17Z" />
      <path d="M8.5 18.8 4.1 17.6a2 2 0 0 1-1.42-2.45L5.5 4.62" />
    </>
  ),
  shuffle: (
    <>
      <path d="M3 7h3.5c5 0 5 10 10 10H21" />
      <path d="m18 14 3 3-3 3M3 17h3.5c1.5 0 2.6-.9 3.55-2.1M14 8.9C14.9 7.8 16 7 17.5 7H21" />
      <path d="m18 4 3 3-3 3" />
    </>
  ),
  arrow: <path d="m9 18 6-6-6-6" />,
  expand: (
    <>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      <path d="m3 8 6-6M21 8l-6-6M3 16l6 6M21 16l-6 6" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
} as const;

function Icon({ name, size = 15 }: { name: keyof typeof GLYPHS; size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55">
        {GLYPHS[name]}
      </g>
    </svg>
  );
}

export function KineticPhotoStack() {
  const [photos, setPhotos] = useState(INITIAL_PHOTOS);
  const [mode, setMode] = useState<"stack" | "fan">("stack");
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const [thrown, setThrown] = useState<"left" | "right" | null>(null);
  const [focus, setFocus] = useState<Photo | null>(null);
  const [shufflePulse, setShufflePulse] = useState(false);
  const [mounted, setMounted] = useState(false);
  const start = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const top = photos[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (focus) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setFocus(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [focus]);

  const rotateDeck = (direction: "left" | "right") => {
    if (thrown || mode === "fan") return;
    setThrown(direction);
    window.setTimeout(() => {
      setPhotos((current) => [...current.slice(1), current[0]]);
      setThrown(null);
      setDrag({ x: 0, y: 0, active: false });
    }, 340);
  };

  const pointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (mode !== "stack" || thrown) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    start.current = { x: event.clientX, y: event.clientY };
    moved.current = false;
    setDrag({ x: 0, y: 0, active: true });
  };

  const pointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!drag.active || mode !== "stack") return;
    const x = event.clientX - start.current.x;
    const y = event.clientY - start.current.y;
    if (Math.abs(x) + Math.abs(y) > 7) moved.current = true;
    setDrag({ x, y, active: true });
  };

  const pointerUp = () => {
    if (!drag.active) return;
    if (Math.abs(drag.x) > 92) rotateDeck(drag.x > 0 ? "right" : "left");
    else {
      setDrag({ x: 0, y: 0, active: false });
      if (!moved.current) setFocus(top);
    }
  };

  const shuffle = () => {
    if (shufflePulse || thrown) return;

    setShufflePulse(true);
    setMode("stack");

    const settleDelay = mode === "fan" ? 430 : 0;

    window.setTimeout(() => setThrown("right"), settleDelay);
    window.setTimeout(() => {
      setPhotos((current) => [...current.slice(1), current[0]]);
      setThrown(null);
      setShufflePulse(false);
    }, settleDelay + 360);
  };

  return (
    <div className="kps-page">
      <style>{STYLES}</style>
      <section className="kps-shell" aria-label="Draggable kinetic photo stack">
        <div className={`kps-stage ${mode} ${shufflePulse ? "shuffling" : ""}`}>
          <div className="kps-grain" />
          <div className="kps-controls">
            <div className="kps-switch" role="group" aria-label="Layout">
              <button
                aria-label="Stack view"
                className={mode === "stack" ? "active" : ""}
                onClick={() => setMode("stack")}
                type="button"
              >
                <Icon name="stack" />
              </button>
              <button
                aria-label="Fan view"
                className={mode === "fan" ? "active" : ""}
                onClick={() => setMode("fan")}
                type="button"
              >
                <Icon name="fan" />
              </button>
            </div>
            <button
              className="kps-shuffle"
              disabled={shufflePulse || Boolean(thrown)}
              onClick={shuffle}
              type="button"
            >
              <Icon name="shuffle" />
              Shuffle
            </button>
          </div>

          <div className="kps-deck" aria-live="polite">
            {[...photos].reverse().map((photo, reverseIndex) => {
              const index = photos.length - 1 - reverseIndex;
              const isTop = index === 0;
              const stackRotate = [-2.5, 3.2][index] ?? 0;
              const fanCenter = (photos.length - 1) / 2;
              const fanX = (index - fanCenter) * 110;
              const fanY = Math.abs(index - fanCenter) * 10;
              const fanRotate = (index - fanCenter) * 8;
              const topTransform =
                isTop && mode === "stack"
                  ? `translate3d(${drag.x}px,${drag.y}px,0) rotate(${drag.x * 0.045}deg)`
                  : undefined;
              const style = {
                "--stack-x": `${index * 5}px`,
                "--stack-y": `${index * 5}px`,
                "--stack-r": `${stackRotate}deg`,
                "--fan-x": `${fanX}px`,
                "--fan-y": `${fanY}px`,
                "--fan-r": `${fanRotate}deg`,
                "--card-tone": photo.tone,
                zIndex: photos.length - index,
                transform: topTransform,
              } as CSSProperties;
              return (
                <button
                  aria-label={`Open ${photo.title}`}
                  className={`kps-card ${isTop ? "top" : ""} ${isTop && thrown ? `thrown-${thrown}` : ""}`}
                  key={photo.id}
                  onClick={() => mode === "fan" && setFocus(photo)}
                  onPointerCancel={pointerUp}
                  onPointerDown={isTop ? pointerDown : undefined}
                  onPointerMove={isTop ? pointerMove : undefined}
                  onPointerUp={isTop ? pointerUp : undefined}
                  style={style}
                  type="button"
                >
                  <span className="kps-photo">
                    <img alt={photo.title} draggable="false" src={photo.src} />
                    <span className="kps-shine" />
                  </span>
                  <span className="kps-card-copy">
                    <span>
                      <b>{photo.title}</b>
                      <small>{photo.place}</small>
                    </span>
                    <em>{photo.year}</em>
                  </span>
                  <span className="kps-open">
                    <Icon name="expand" size={13} />
                  </span>
                </button>
              );
            })}
          </div>
          {mode === "stack" && (
            <div className="kps-nav">
              <button aria-label="Previous photo" onClick={() => rotateDeck("left")} type="button">
                <Icon name="arrow" />
              </button>
              <button aria-label="Next photo" onClick={() => rotateDeck("right")} type="button">
                <Icon name="arrow" />
              </button>
            </div>
          )}
        </div>

        {mounted && focus && createPortal(
          <div
            className="kps-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={focus.title}
            onClick={() => setFocus(null)}
          >
            <button aria-label="Close" className="kps-close" onClick={() => setFocus(null)} type="button">
              <Icon name="close" />
            </button>
            <figure onClick={(event) => event.stopPropagation()}>
              <img alt={focus.title} src={focus.src} />
              <figcaption>
                <div>
                  <b>{focus.title}</b>
                  <span>{focus.place}</span>
                </div>
                <em>{focus.year}</em>
              </figcaption>
            </figure>
          </div>,
          document.body
        )}
      </section>
    </div>
  );
}

const STYLES = `
.kps-page{--bg:#090909;--panel:#111110;--ink:#f1f0eb;--muted:#8f8d87;--line:#2d2c29;--soft:#1a1917;--card:#e8e3d9;width:100%;min-width:0;display:flex;justify-content:center;align-items:center;padding:0;background:transparent;color:var(--ink);font-family:var(--font-outfit),ui-sans-serif,system-ui,sans-serif}
.dark .kps-page{--bg:#090909;--panel:#0d0d0c;--ink:#f1f0eb;--muted:#8f8d87;--line:#262522;--soft:#171614;--card:#181816}
.kps-shell{width:100%;max-width:500px;overflow:hidden;border:1px solid var(--line);border-radius:20px;background:var(--panel);box-shadow:0 24px 70px rgba(0,0,0,.6);position:relative}
.kps-controls{position:absolute;z-index:20;top:18px;right:18px;display:flex;align-items:center;gap:8px}
.kps-switch{display:flex;padding:3px;border:1px solid var(--line);border-radius:9px;background:var(--soft)}
.kps-switch button,.kps-shuffle,.kps-nav button,.kps-close{border:0;color:var(--muted);cursor:pointer;transition:transform .16s,background-color .16s,color .16s,opacity .16s}
.kps-switch button{width:31px;height:28px;display:grid;place-items:center;border-radius:6px;background:transparent}
.kps-switch button.active{background:var(--panel);color:var(--ink);box-shadow:0 1px 3px rgba(0,0,0,.15)}
.kps-shuffle{height:34px;padding:0 12px;display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:9px;background:var(--panel);color:var(--ink);font-size:12px;font-family:inherit}
.kps-shuffle:hover:not(:disabled){background:var(--soft)}
.kps-shuffle:disabled{cursor:default;opacity:.48}
.kps-shuffle:active:not(:disabled),.kps-switch button:active,.kps-nav button:active{transform:scale(.95)}
.kps-stage{height:540px;position:relative;overflow:hidden;isolation:isolate;background:var(--panel)}
.kps-stage:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,transparent 0 24%,rgba(0,0,0,.3) 70%),linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:auto,48px 48px,48px 48px;opacity:.25;mask-image:radial-gradient(circle at 50% 50%,#000,transparent 74%)}
.kps-grain{position:absolute;inset:0;pointer-events:none;z-index:10;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.kps-deck{position:absolute;left:50%;top:50%;width:280px;height:390px;transform:translate(-50%,-50%);perspective:1100px}
.kps-card{position:absolute;inset:0;width:100%;height:100%;padding:9px 9px 0;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:#141413;color:#f1f0eb;text-align:left;box-shadow:0 18px 45px rgba(0,0,0,.6),0 2px 8px rgba(0,0,0,.4);transform:translate3d(var(--stack-x),var(--stack-y),0) rotate(var(--stack-r));transform-origin:50% 88%;transition:transform .48s cubic-bezier(.2,.85,.25,1),box-shadow .25s,border-color .25s;cursor:grab;touch-action:none;user-select:none}
.kps-card.top{cursor:grab}
.kps-card.top:active{cursor:grabbing;box-shadow:0 24px 70px rgba(0,0,0,.8);border-color:rgba(255,255,255,.25)}
.kps-photo{position:relative;display:block;width:100%;height:310px;overflow:hidden;border-radius:6px;background:var(--card-tone)}
.kps-photo img{width:100%;height:100%;display:block;object-fit:cover;pointer-events:none;transition:transform .6s cubic-bezier(.2,.8,.2,1),filter .3s}
.kps-card:hover .kps-photo img{transform:scale(1.03)}
.kps-shine{position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.15) 47%,transparent 58%);transform:translateX(-120%);transition:transform .8s}
.kps-card:hover .kps-shine{transform:translateX(120%)}
.kps-card-copy{height:62px;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 6px}
.kps-card-copy>span{display:grid;gap:2px}
.kps-card-copy b{font-size:13px;font-weight:600;letter-spacing:-.01em;color:#ffffff}
.kps-card-copy small{color:#9e9c96;font-size:10px;font-family:monospace}
.kps-card-copy em{font:10px monospace;color:#77736b;font-style:normal}
.kps-open{position:absolute;top:18px;right:18px;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:rgba(20,20,20,.82);border:1px solid rgba(255,255,255,.15);color:#f1f0eb;opacity:0;transform:scale(.8);backdrop-filter:blur(9px);transition:opacity .2s,transform .2s}
.kps-card:hover .kps-open{opacity:1;transform:none}
.kps-card.thrown-right{animation:kps-throw-right .34s ease-in forwards}
.kps-card.thrown-left{animation:kps-throw-left .34s ease-in forwards}
.kps-stage.fan .kps-deck{width:260px}
.kps-stage.fan .kps-card{transform:translate3d(var(--fan-x),var(--fan-y),0) rotate(var(--fan-r));cursor:pointer}
.kps-stage.fan .kps-card:hover{transform:translate3d(var(--fan-x),calc(var(--fan-y) - 22px),0) rotate(var(--fan-r));z-index:30!important;box-shadow:0 28px 65px rgba(0,0,0,.75);border-color:rgba(255,255,255,.3)}
.kps-nav{position:absolute;z-index:20;right:18px;bottom:18px;display:flex;gap:6px}
.kps-nav button{width:34px;height:34px;display:grid;place-items:center;border:1px solid var(--line);border-radius:50%;background:var(--panel);color:var(--ink)}
.kps-nav button:first-child{transform:rotate(180deg)}
.kps-nav button:first-child:active{transform:rotate(180deg) scale(.95)}
.kps-nav button:hover{background:var(--soft)}
.kps-lightbox{position:fixed;inset:0;z-index:999999!important;display:grid;place-items:center;padding:24px;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);animation:kps-fade .25s ease-out}
.kps-lightbox figure{position:relative;z-index:999999!important;width:min(640px,90vw);margin:0;animation:kps-focus .36s cubic-bezier(.2,.8,.2,1);border:1px solid rgba(255,255,255,.15);border-radius:12px;overflow:hidden;box-shadow:0 30px 90px rgba(0,0,0,.85)}
.kps-lightbox figure>img{width:100%;height:min(65vh,540px);display:block;object-fit:cover;border-radius:12px 12px 0 0}
.kps-lightbox figcaption{height:64px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#141413;color:#f1f0eb;border-top:1px solid rgba(255,255,255,.08)}
.kps-lightbox figcaption div{display:grid;gap:2px}
.kps-lightbox figcaption b{font-size:14px;color:#fff}
.kps-lightbox figcaption span{font-size:11px;color:#9e9c96;font-family:monospace}
.kps-lightbox figcaption em{font:11px monospace;color:#737068;font-style:normal}
.kps-close{position:fixed;top:24px;right:24px;width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(20,20,20,.85);color:#fff;z-index:1000000!important;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:background .2s,transform .2s}
.kps-close:hover{background:rgba(255,255,255,.2);transform:scale(1.05)}
@keyframes kps-throw-right{0%{transform:translate3d(0,0,0) rotate(-2.5deg);opacity:1}45%{transform:translate3d(58%,2px,0) rotate(11deg);opacity:1}100%{transform:translate3d(18%,20px,0) rotate(3deg) scale(.97);opacity:0}}
@keyframes kps-throw-left{0%{transform:translate3d(0,0,0) rotate(-2.5deg);opacity:1}45%{transform:translate3d(-58%,2px,0) rotate(-11deg);opacity:1}100%{transform:translate3d(-18%,20px,0) rotate(-3deg) scale(.97);opacity:0}}
@keyframes kps-fade{from{opacity:0}}
@keyframes kps-focus{from{opacity:0;transform:scale(.93) translateY(16px)}}
@media(prefers-reduced-motion:reduce){.kps-page *{animation-duration:.01ms!important;transition-duration:.01ms!important}}
@media(max-width:900px){.kps-stage.fan .kps-card{--fan-x:calc((var(--stack-x) - 10px) * 7);transform:translate3d(var(--fan-x),var(--fan-y),0) rotate(var(--fan-r))}.kps-stage.fan .kps-deck{transform:translate(-50%,-50%) scale(.82)}}
@media(max-width:660px){.kps-stage{height:480px}.kps-deck{width:240px;height:340px}.kps-photo{height:265px}.kps-card-copy{height:54px}.kps-controls{top:14px;right:14px}.kps-nav{right:14px;bottom:14px}.kps-stage.fan .kps-deck{width:220px;transform:translate(-50%,-50%) scale(.7)}}
`;
