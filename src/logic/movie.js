import * as cheerio from 'react-native-cheerio';
import axios from 'axios';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';

const homePageUrl = 'http://df.divirtasemais.com.br/canal/cinema/';

const getPage = async url => {
    const arrayBuffer = await axios.get(url, { responseType: 'arraybuffer' });
    return iconv.decode(new Buffer(arrayBuffer.data), 'iso-8859-1').toString(); // html
};

export const getOptions = async () => {
    const html = await getPage(homePageUrl);
    const $ = cheerio.load(html, { decodeEntities: false });

    const movies = $('#filme');
    const places = $('#cinema');

    const movieOptions = movies
        .find('option')
        .map(function(i, e) {
            return {
                title: $(this).html(),
                url: $(this).val(),
                key: `${i}`
            };
        })
        .toArray();

    const placeOptions = places
        .find('option')
        .map(function(i, e) {
            return {
                title: $(this).html(),
                url: $(this).val(),
                key: `${i}`
            };
        })
        .toArray();

    movieOptions.shift();
    placeOptions.shift();

    return { movieOptions, placeOptions };
};

export const getMoviesForPlace = async url => {
    const html = await getPage(url);

    const $ = cheerio.load(html, { decodeEntities: false });

    return [];
};

export const getPlacesForMovie = async url => {
    const html = await getPage(url);
    const $ = cheerio.load(html, { decodeEntities: false });

    const image = $('.cont_filme_img.unit')
        .find('img')
        .attr('src');
    const synopsis = $('.cont_filme_img.unit')
        .find('span')
        .text();
    const title = $('.titulo_filme_cartaz.mtm').text();

    const schedule = [];

    $('.cinemas_filmes.unit.mrs.textoA').each(function(i, e) {
        const response = {};
        response.cinema = $(this)
            .find('li.nome_cinema h4')
            .text();
        response.blocks = [];
        $(this)
            .find('li ul.salas_cinema.unit')
            .each(function(i, e) {
                const obj = {};
                obj.title = $(this)
                    .find('.titulo_sala_cinema')
                    .text();

                obj.horarios = [];

                $(this)
                    .find('.horarios')
                    .each(function(i, e) {
                        obj.horarios.push({
                            value: $(this)
                                .find('li')
                                .eq(0)
                                .text(),
                            dub:
                                $(this)
                                    .find('li')
                                    .eq(1)
                                    .text() === 'DUB'
                        });
                    });

                response.blocks.push(obj);
            });

        schedule.push(response);
    });

    return { title, image, synopsis, schedule };
};
