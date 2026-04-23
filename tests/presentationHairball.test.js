import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const presentationHtml = readFileSync(new URL("../presentation.html", import.meta.url), "utf8");

describe("presentation 失败案例毛线球图", () => {
  it("会把纯随机乱麻升级成可重复的结构化失控图", () => {
    expect(presentationHtml).toContain("function createSeededRandom");
    expect(presentationHtml).toContain("const coreNodeCount = 84");
    expect(presentationHtml).toContain("const crossRegionLinks = [");
    expect(presentationHtml).toContain("layout: 'none'");
    expect(presentationHtml).toContain("Math.floor(random() * coreNodeCount)");
    expect(presentationHtml).not.toContain("for(let i=0; i<80; i++)");
    expect(presentationHtml).not.toContain("Math.floor(Math.random()*80)");
  });

  it("会为跨区长连线提供更刺眼的视觉强调", () => {
    expect(presentationHtml).toContain("width: 2.2");
    expect(presentationHtml).toContain("color: '#93c5fd'");
    expect(presentationHtml).toContain("opacity: 0.72");
  });
});
