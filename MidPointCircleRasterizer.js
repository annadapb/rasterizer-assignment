class MidpointCircleRasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        // Center is midpoint of diameter endpoints
        const cx = Math.round((p1.x + p2.x) / 2);
        const cy = Math.round((p1.y + p2.y) / 2);

        // Radius = half the distance between p1 and p2
        const r = Math.round(
            Math.sqrt(
                (p2.x - p1.x) * (p2.x - p1.x) +
                (p2.y - p1.y) * (p2.y - p1.y)
            ) / 2
        );

        let x = 0;
        let y = r;
        let d = 1 - r; // decision parameter

        while (x <= y) {
            // 8-way symmetry
            pixels.push(new Point(cx + x, cy + y));
            pixels.push(new Point(cx - x, cy + y));
            pixels.push(new Point(cx + x, cy - y));
            pixels.push(new Point(cx - x, cy - y));

            pixels.push(new Point(cx + y, cy + x));
            pixels.push(new Point(cx - y, cy + x));
            pixels.push(new Point(cx + y, cy - x));
            pixels.push(new Point(cx - y, cy - x));

            if (d < 0) {
                d = d + 2 * x + 3;
            } else {
                d = d + 2 * (x - y) + 5;
                y--;
            }
            x++;
        }

        return pixels;
    }
}