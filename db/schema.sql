-- Core tables schema
CREATE TABLE IF NOT EXISTS stores (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  region TEXT NOT NULL,
  open_date DATE NOT NULL,
  lease_end_date DATE,
  floor_area NUMERIC,
  franchise_flag BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS sales (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  net_sales NUMERIC NOT NULL,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS cogs (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  cogs NUMERIC NOT NULL,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS labor (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  fixed NUMERIC NOT NULL,
  variable NUMERIC NOT NULL,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS rent (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  base NUMERIC NOT NULL,
  cam NUMERIC NOT NULL,
  mgmt_fee NUMERIC NOT NULL,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS opex (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  utilities NUMERIC NOT NULL,
  other_fixed NUMERIC NOT NULL,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS capex (
  store_id INTEGER REFERENCES stores(id),
  start_yyyymm CHAR(6) NOT NULL,
  amount NUMERIC NOT NULL,
  life_months INTEGER NOT NULL,
  purpose TEXT,
  PRIMARY KEY (store_id, start_yyyymm)
);

CREATE TABLE IF NOT EXISTS external_factors (
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  footfall_index NUMERIC,
  market_growth NUMERIC,
  PRIMARY KEY (store_id, yyyymm)
);

CREATE TABLE IF NOT EXISTS alerts (
  id SERIAL PRIMARY KEY,
  store_id INTEGER REFERENCES stores(id),
  yyyymm CHAR(6) NOT NULL,
  type TEXT NOT NULL,
  severity TEXT NOT NULL,
  note TEXT,
  resolved_flag BOOLEAN DEFAULT false
);
