import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const presentationHtml = readFileSync(new URL("../presentation.html", import.meta.url), "utf8");
const presentationCss = readFileSync(new URL("../assets/presentation.css", import.meta.url), "utf8");

describe("presentation 痛点段收束", () => {
  it("会把三页痛点压成一张主图页，并移除维度墙叙事", () => {
    expect(presentationHtml).toContain("一张图，为什么会彻底失控");
    expect(presentationHtml).toContain('class="pain-stage ');
    expect(presentationHtml).toContain('id="hairball-chart"');
    expect(presentationHtml).not.toContain("Pain Point 02");
    expect(presentationHtml).not.toContain("Pain Point 03");
    expect(presentationHtml).not.toContain("维度墙");
  });

  it("会把背景页和后续能力页改成与单页痛点叙事一致的文案", () => {
    expect(presentationHtml).toContain("这些问题，往往会在同一张复杂关系图里同时出现");
    expect(presentationHtml).toContain("把隐藏属性变成可读的视觉信号");
  });

  it("会让痛点页以图为主并动态显示总页数", () => {
    expect(presentationCss).toContain(".pain-stage");
    expect(presentationCss).toContain(".pain-stage__chart");
    expect(presentationCss).toContain(".pain-chip");
    expect(presentationHtml).toContain('id="total-pages"');
    expect(presentationHtml).toContain("totalPages.textContent = slides.length");
    expect(presentationHtml).not.toContain(" / 14");
  });
});
