class WuRasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        let x1 = p1.x, y1 = p1.y;
        let x2 = p2.x, y2 = p2.y;

        const steep = Math.abs(y2 - y1) > Math.abs(x2 - x1);

        // If line is steep, swap x and y
        if (steep) {
            [x1, y1] = [y1, x1];
            [x2, y2] = [y2, x2];
        }

        // Ensure left-to-right drawing
        if (x1 > x2) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }

        const dx = x2 - x1;
        const dy = y2 - y1;
        const gradient = dx === 0 ? 1 : dy / dx;

        let y = y1;

        for (let x = Math.round(x1); x <= Math.round(x2); x++) {
            const yFloor = Math.floor(y);

            if (steep) {
                pixels.push(new Point(yFloor, x));
                pixels.push(new Point(yFloor + 1, x));
            } else {
                pixels.push(new Point(x, yFloor));
                pixels.push(new Point(x, yFloor + 1));
            }

            y += gradient;
        }

        return pixels;
    }
}