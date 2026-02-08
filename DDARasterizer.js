class DDARasterizer {

    rasterize(p1, p2) {

        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;

        let steps = Math.max(Math.abs(dx), Math.abs(dy));

        let xInc = dx / steps;
        let yInc = dy / steps;

        let x = p1.x;
        let y = p1.y;

        const pixels = [];

        for (let i = 0; i <= steps; i++) {
            pixels.push(new Point(Math.round(x), Math.round(y)));
            x += xInc;
            y += yInc;
        }

        return pixels;
    }
}
