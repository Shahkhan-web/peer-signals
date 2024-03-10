import type { WebSocketServer, ServerOptions } from "ws";
import type { CorsOptions } from "cors";

export interface IConfig {
	readonly host: string;
	readonly port: number;
	readonly expire_timeout: number;
	readonly alive_timeout: number;
	readonly key: string;
	readonly path: string;
	readonly concurrent_limit: number;
	readonly allow_discovery: boolean;
	readonly proxied: boolean | string;
	readonly cleanup_out_msgs: number;
	readonly ssl?: {
		key: string;
		cert: string;
	};
	readonly generateClientId?: () => string;
	readonly createWebSocketServer?: (options: ServerOptions) => WebSocketServer;
	readonly corsOptions: CorsOptions;
}

const defaultConfig: IConfig = {
	host: "::",
	port: 9000,
	expire_timeout: 5000,
	alive_timeout: 90000,
	key: "peerjs",
	path: "/v1",
	concurrent_limit: 5000,
	allow_discovery: true,
	proxied: false,
	cleanup_out_msgs: 1000,
	corsOptions: {
		origin: ["https://6z98ptwz-35341.inc1.devtunnels.ms", "http://localhost",true]
	},
};

export default defaultConfig;
