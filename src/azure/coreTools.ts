import { promisify } from "util";
import { exec } from "child_process"

const p_exec = promisify(exec);

export class AzureFunctionsCoreTools {
    public static async publish(functionAppName: string) {
        const { stdout, stderr } = await p_exec(`func azure functionapp publish ${functionAppName}`)
    }
}