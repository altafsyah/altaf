"use client";
import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Pendulum() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.innerHTML = "";

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Constraint,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;
    engine.gravity.y = 1;

    const parent = sceneRef.current;
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const render = Render.create({
      element: parent,
      engine: engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });
    renderRef.current = render;

    const COLORS = {
      NAVY: "#2E4053",
      CREAM: "#F5F5DC",
    };

    const createPendulum = (x: number, y: number, color: string, angle = 0) => {
      const radius = 25;

      const ball = Bodies.circle(x, y + 50, radius, {
        render: {
          fillStyle: color,
          strokeStyle: "#999",
          lineWidth: 1,
        },
        friction: 0,
        restitution: 1,
        density: 0.01,
        slop: 0,
      });

      if (angle !== 0) {
        Matter.Body.rotate(ball, angle);
      }

      const constraint = Constraint.create({
        pointA: { x, y },
        bodyB: ball,
        stiffness: 1,
        length: 150,
        render: {
          strokeStyle: "#000",
          lineWidth: 2,
        },
      });

      return { ball, constraint };
    };

    const createPendulumRow = (
      startX: number,
      startY: number,
      count: number,
      spacing = 55
    ) => {
      return Array.from({ length: count }).map((_, i) => {
        const color = i % 2 === 0 ? COLORS.NAVY : COLORS.CREAM;
        return createPendulum(startX + i * spacing, startY, color);
      });
    };

    const setupScene = () => {
      Composite.clear(world, true);

      const mainRow = createPendulumRow(width * 0.4, height * 0.2, 4);
      mainRow.forEach(({ ball, constraint }) => {
        Composite.add(world, [ball, constraint]);
      });

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });

      Composite.add(world, mouseConstraint);
      render.mouse = mouse;
    };

    setupScene();

    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;

        render.canvas.width = newWidth;
        render.canvas.height = newHeight;
        render.options.width = newWidth;
        render.options.height = newHeight;

        setupScene();
      }
    });

    resizeObserver.observe(parent);

    return () => {
      resizeObserver.disconnect();
      if (renderRef.current) {
        Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
        renderRef.current.textures = {};
      }
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="card px-5 py-2 text-2xl font-bold text-white w-ft bg-red-500 w-fit">
        <h2>Just in case you got bored</h2>
      </div>
      <div
        ref={sceneRef}
        className="mx-auto h-[250px] w-full bg-blue-500 border-2 border-black mt-5"
      />
    </>
  );
}
