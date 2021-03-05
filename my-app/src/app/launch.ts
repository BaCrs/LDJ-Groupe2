export interface Launch {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: object;
    ships: string[];
    telemetry: object;
    launch_site: object;
    launch_success: boolean;
    launch_failure_details: object;
    links: object;
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: object;
    crew: object;
}