class MidpointCircleRasterizer {

    rasterize(p1, p2) {

        // Center from diameter endpoints
        const cx = Math.floor((p1.x + p2.x) / 2);
        const cy = Math.floor((p1.y + p2.y) / 2);

        // Radius from distance
        const r = Math.floor(Math.hypot(p2.x - p1.x, p2.y - p1.y) / 2);

        let x = r;
        let y = 0;
        let P = 1 - r;

        const pixels = [];

        function plot(px, py) {
            pixels.push(new Point(px, py));
        }

        function drawSymmetric(x, y) {
            plot(cx + x, cy + y);
            plot(cx - x, cy + y);
            plot(cx + x, cy - y);
            plot(cx - x, cy - y);

            plot(cx + y, cy + x);
            plot(cx - y, cy + x);
            plot(cx + y, cy - x);
            plot(cx - y, cy - x);
        }

        while (x >= y) {

            drawSymmetric(x, y);

            y++;

            if (P <= 0) {
                P = P + 2 * y + 1;
            } else {
                x--;
                P = P + 2 * y - 2 * x + 1;
            }
        }

        return pixels;
    }
}
