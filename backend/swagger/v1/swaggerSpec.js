// swagger/swaggerSpec.js

// Importar la información general de la API y configuraciones de los servidores
import info from './info.js';
import servers from './servers.js';

// Importar las rutas de la API
import getAllVideos from './paths/videos/getAllVideos.js';
import getVideoById from './paths/videos/getVideoById.js';
import createVideo from './paths/videos/createVideo.js';
import updateVideo from './paths/videos/updateVideo.js';
import deleteVideo from './paths/videos/deleteVideo.js';
import getAllLinks from './paths/links/getAllLinks.js';
import getLinkById from './paths/links/getLinkById.js';
import createLink from './paths/links/createLink.js';
import updateLink from './paths/links/updateLink.js';
import deleteLink from './paths/links/deleteLink.js';
import createUser from './paths/users/createUser.js';
import deleteUser from './paths/users/deleteUser.js';
import updateUser from './paths/users/updateUser.js';
import getAllSuggestions from './paths/suggestions/getAllSuggestions.js';
import createSuggestion from './paths/suggestions/createSuggestion.js';

// Importar los esquemas de los modelos (schemas)
import Video from './components/schemas/video/Video.js';
import VideoInput from './components/schemas/video/VideoInput.js';
import VideoUpdateInput from './components/schemas/video/VideoUpdateInput.js';
import Link from './components/schemas/links/Link.js';
import LinkInput from './components/schemas/links/LinkInput.js';
import User from './components/schemas/users/User.js';
import Suggestion from './components/schemas/suggestions/Suggestion.js';
import UserInput from './components/schemas/users/UserInput.js';
import SuggestionInput from './components/schemas/suggestions/SuggestionInput.js';

// Importar las rutas de autenticación (login y logout)
import login from './paths/auth/login.js'; // Importa la ruta de login
import logout from './paths/auth/logout.js';

// Definición del objeto swaggerSpec con la configuración de la API

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        // Rutas de autenticación
        '/auth/login': {
            post: login
        },
        '/auth/logout': {
            post: logout
        },

        // Rutas de usuarios
        '/users': {
            post: createUser,
        },
        '/users/{userId}': {
            put: updateUser,
            delete: deleteUser
        },

        // Rutas de videos
        '/resources/videos': {
            get: getAllVideos,
            post: createVideo
        },
        '/resources/videos/{videoId}': {
            get: getVideoById,
            put: updateVideo,
            delete: deleteVideo
        },

        // Rutas de links
        '/resources/links': {
            get: getAllLinks,
            post: createLink
        },
        '/resources/links/{linkId}': {
            get: getLinkById,
            put: updateLink,
            delete: deleteLink
        },

        // Rutas Suggestion
        '/resources/suggestions': {
            get: getAllSuggestions,
            post: createSuggestion
        }
    },
    components: {
        schemas: {
            // Esquemas de videos
            Video,
            VideoInput,
            VideoUpdateInput,

            // Esquemas de links
            Link,
            LinkInput,

            // Esquemas de usuarios
            User,
            UserInput,

            // Esquemas de suggestions
            Suggestion,
            SuggestionInput
        },
        securitySchemes: {
        }
    }
};

export default swaggerSpec;