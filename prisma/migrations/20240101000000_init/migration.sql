-- Enable PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- Table definitions (simplified, match Prisma models)
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  floor_area_sqm DOUBLE PRECISION NOT NULL,
  floor INT,
  frontage_m DOUBLE PRECISION,
  corner_flag BOOLEAN,
  visibility INT,
  road_class TEXT,
  parking BOOLEAN,
  zoning TEXT,
  building_age INT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE trade_areas (
  id SERIAL PRIMARY KEY,
  location_id INT REFERENCES locations(id),
  method TEXT NOT NULL,
  params_json JSONB,
  geom geography(MultiPolygon,4326) NOT NULL
);

CREATE TABLE poi (
  id SERIAL PRIMARY KEY,
  brand TEXT,
  category TEXT,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  is_competitor BOOLEAN NOT NULL,
  weight DOUBLE PRECISION,
  geom geography(Point,4326) NOT NULL
);

CREATE TABLE demography (
  geo_id INT PRIMARY KEY,
  pop_total INT,
  pop_day INT,
  pop_night INT,
  income_idx DOUBLE PRECISION,
  student_idx DOUBLE PRECISION,
  office_worker_idx DOUBLE PRECISION,
  age_buckets_json JSONB,
  geom geography(Polygon,4326) NOT NULL
);

CREATE TABLE rent_stats (
  geo_id INT PRIMARY KEY,
  rent_psm_p50 DOUBLE PRECISION,
  rent_psm_p75 DOUBLE PRECISION,
  deposit_ratio DOUBLE PRECISION,
  mgmt_fee_psm DOUBLE PRECISION,
  fitout_cost_psm DOUBLE PRECISION,
  lease_term_months INT
);

CREATE TABLE finance_assumptions (
  id SERIAL PRIMARY KEY,
  mode VARCHAR(10) NOT NULL,
  royalty_rate DOUBLE PRECISION,
  ad_fee_rate DOUBLE PRECISION,
  cogs_rate DOUBLE PRECISION,
  labor_rate DOUBLE PRECISION,
  other_opex_rate DOUBLE PRECISION,
  wacc DOUBLE PRECISION,
  hurdle_rate DOUBLE PRECISION,
  corp_support_cost DOUBLE PRECISION
);

CREATE TABLE score_cache (
  location_id INT PRIMARY KEY REFERENCES locations(id),
  score DOUBLE PRECISION NOT NULL,
  demand DOUBLE PRECISION NOT NULL,
  competition DOUBLE PRECISION NOT NULL,
  site DOUBLE PRECISION NOT NULL,
  cost DOUBLE PRECISION NOT NULL,
  risk DOUBLE PRECISION NOT NULL,
  finance DOUBLE PRECISION NOT NULL,
  p50_revenue DOUBLE PRECISION,
  p75_revenue DOUBLE PRECISION,
  payback_months_corp DOUBLE PRECISION,
  franchise_profit_idx DOUBLE PRECISION,
  cannibalization_idx DOUBLE PRECISION,
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE similarity (
  id SERIAL PRIMARY KEY,
  location_id INT REFERENCES locations(id),
  neighbor_location_id INT REFERENCES locations(id),
  sim_cosine DOUBLE PRECISION NOT NULL,
  method TEXT,
  features_json JSONB
);
