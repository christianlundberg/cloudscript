import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'page'
})
export class PagePipe implements PipeTransform {

    transform(html: string, js: string, css: string) {
        const page = `
        <!doctype html>
        <html lang="en">
        <head>
          <style>${css}</style>
          <script>${js}</script>
        </head>
        <body>
          ${html}
        </body>
        </html>
        `;

        return page;
    }
}