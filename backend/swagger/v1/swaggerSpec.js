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

// Importar los esquemas de los modelos (schemas)
import Video from './components/schemas/video/Video.js';
import VideoInput from './components/schemas/video/VideoInput.js';
import VideoUpdateInput from './components/schemas/video/VideoUpdateInput.js';

// Importar los esquemas de seguridad

// Definición del objeto swaggerSpec con la configuración de la API

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        '/resources/videos': {
            get: getAllVideos,
            post: createVideo
        },
        '/resources/videos/{videoId}': {
            get: getVideoById,
            put: updateVideo,
            delete: deleteVideo
        }
    },
    components: {
        schemas: {
            Video,
            VideoInput,
            VideoUpdateInput
        },
        securitySchemes: {
        }
    }
};

export default swaggerSpec;