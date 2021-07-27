/**
 * Structure file requried
 */
import { ModuleConfigProps } from 'app/redux/types';
import reduxSlice, * as reduxSliceActions from './config/reduxSlice';

const moduleConfig: ModuleConfigProps<typeof reduxSlice> = {
    // ========================= Editable: Name ========================\\
    name: 'image',
    // =================================================================\\

    reduxSlice,
};

export { reduxSliceActions };
export default moduleConfig;
