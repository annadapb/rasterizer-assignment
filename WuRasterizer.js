class WuRasterizer {

    rasterize(p1, p2) {

        let x0 = p1.x, y0 = p1.y;
        let x1 = p2.x, y1 = p2.y;

        const pixels = [];
        const plot = (x, y) => pixels.push(new Point(Math.round(x), Math.round(y)));

        let steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
        if (steep) { [x0, y0] = [y0, x0];[x1, y1] = [y1, x1]; }
        if (x0 > x1) { [x0, x1] = [x1, x0];[y0, y1] = [y1, y0]; }

        let dx = x1 - x0;
        let dy = y1 - y0;
        let gradient = dy / dx;

        let y = y0;
        for (let x = x0; x <= x1; x++) {
            steep ? plot(y, x) : plot(x, y);
            y += gradient;
        }

        return pixels;
    }
}
