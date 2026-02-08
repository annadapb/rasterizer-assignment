class MidpointCircleRasterizer {

    rasterize(p1, p2) {

        const cx = Math.floor((p1.x + p2.x) / 2);
        const cy = Math.floor((p1.y + p2.y) / 2);
        const r = Math.floor(Math.hypot(p2.x - p1.x, p2.y - p1.y) / 2);

        let x = r, y = 0;
        let d = 1 - r;

        const pixels = [];

        function plot(px, py) {
            pixels.push(new Point(px, py));
        }

        while (x >= y) {
            plot(cx + x, cy + y);
            plot(cx - x, cy + y);
            plot(cx + x, cy - y);
            plot(cx - x, cy - y);
            plot(cx + y, cy + x);
            plot(cx - y, cy + x);
            plot(cx + y, cy - x);
            plot(cx - y, cy - x);

            y++;
            if (d < 0) d += 2 * y + 1;
            else { x--; d += 2 * (y - x) + 1; }
        }

        return pixels;
    }
}
