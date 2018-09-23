import * as cheerio from 'react-native-cheerio';
import axios from 'axios';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';

const homePageUrl = 'http://df.divirtasemais.com.br/canal/cinema/';

const getPage = async (url) => {
    const arrayBuffer = await axios.get(url, { responseType: 'arraybuffer' });
    return iconv.decode(Buffer.from(arrayBuffer.data), 'iso-8859-1').toString(); // html
};

export const getOptions = async () => {
    const html = await getPage(homePageUrl);
    const $ = cheerio.load(html, { decodeEntities: false });

    const movies = $('#filme');
    const theaters = $('#cinema');

    const movieOptions = movies
        .find('option')
        .map(function (i, e) {
            return {
                title: $(this).html(),
                url: $(this).val(),
                key: `${i}`,
            };
        })
        .toArray();

    const theaterOptions = theaters
        .find('option')
        .map(function (i, e) {
            return {
                title: $(this).html(),
                url: $(this).val(),
                key: `${i}`,
            };
        })
        .toArray();

    movieOptions.shift();
    theaterOptions.shift();

    return { movieOptions, theaterOptions };
};

export const getTheaterDetails = async (url) => {
    const html = await getPage(url);

    const $ = cheerio.load(html, { decodeEntities: false });

    return [];
};

export const getMovieDetails = async (url) => {
    const html = await getPage(url);
    const $ = cheerio.load(html, { decodeEntities: false });

    const response = {};

    response.image = $('.cont_filme_img.unit')
        .find('img')
        .attr('src');

    response.synopsis = $('.cont_filme_img.unit')
        .find('span')
        .text();

    response.title = $('.titulo_filme_cartaz.mtm').text();

    response.trailer = `https://youtube.com/watch?v=${
        $('.unit.corpo_filme iframe')
            .attr('src')
            .split('embed/')[1]
    }`;

    $('#box_3 li').each(function () {
        const row = $(this)
            .text()
            .replace(/^\s+|\s+$/g, '');
        let key = row.split(':')[0].replace(/^\s+|\s+$/g, '');
        let value = row.split(':')[1].replace(/^\s+|\s+$/g, '');
        if (key === 'Titulo Original') key = 'originalTitle';
        if (key === 'Duracao') key = 'duration';
        if (key === 'Censura') key = 'rating';
        if (key === 'Genero') {
            key = 'genre';
            const genres = value.split(',').map(e => e.replace(/^\s+|\s+$/g, ''));

            value = genres.filter((elem, pos, arr) => genres.indexOf(elem) == pos).join(', ');
        }
        response[key] = value;
    });

    response.schedule = [];

    $('.cinemas_filmes.unit.mrs.textoA').each(function (i, e) {
        const resp = {};
        resp.name = $(this)
            .find('li.nome_cinema h4')
            .text();
        resp.blocks = [];
        $(this)
            .find('li ul.salas_cinema.unit')
            .each(function (i, e) {
                const obj = {};
                obj.title = $(this)
                    .find('.titulo_sala_cinema')
                    .text();

                obj.horarios = [];

                $(this)
                    .find('.horarios')
                    .each(function (i, e) {
                        obj.horarios.push({
                            value: $(this)
                                .find('li')
                                .eq(0)
                                .text(),
                            dub:
                                $(this)
                                    .find('li')
                                    .eq(1)
                                    .text() === 'DUB',
                        });
                    });

                resp.blocks.push(obj);
            });

        response.schedule.push(resp);
    });

    return response;
};
