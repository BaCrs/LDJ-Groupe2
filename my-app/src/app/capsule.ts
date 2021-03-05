export interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    launch_year : string;
    launch_month : string;
    launch_day : string;
    launch_hourmin : string;
    original_launch_unix: number;
    missions: object[];
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
}