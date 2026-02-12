class DDARasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        let x1 = p1.x, y1 = p1.y;
        let x2 = p2.x, y2 = p2.y;

        let dx = x2 - x1;
        let dy = y2 - y1;

        let steps = Math.max(Math.abs(dx), Math.abs(dy));

        let xInc = dx / steps;
        let yInc = dy / steps;

        let x = x1;
        let y = y1;

        for (let i = 0; i <= steps; i++) {
            pixels.push(new Point(Math.round(x), Math.round(y)));
            x += xInc;
            y += yInc;
        }

        return pixels;
    }
}