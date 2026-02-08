class MidpointCircleRasterizer {

    rasterize(p1, p2) {

        let cx = Math.floor((p1.x + p2.x) / 2);
        let cy = Math.floor((p1.y + p2.y) / 2);
        let r = Math.floor(Math.hypot(p2.x - p1.x, p2.y - p1.y) / 2);

        let x = 0;
        let y = r;
        let d = 1 - r;

        const pixels = [];

        function plot(x, y) {
            pixels.push(new Point(cx + x, cy + y));
            pixels.push(new Point(cx - x, cy + y));
            pixels.push(new Point(cx + x, cy - y));
            pixels.push(new Point(cx - x, cy - y));
            pixels.push(new Point(cx + y, cy + x));
            pixels.push(new Point(cx - y, cy + x));
            pixels.push(new Point(cx + y, cy - x));
            pixels.push(new Point(cx - y, cy - x));
        }

        while (x <= y) {
            plot(x, y);
            if (d < 0) d += 2 * x + 3;
            else { d += 2 * (x - y) + 5; y--; }
            x++;
        }

        return pixels;
    }
}
